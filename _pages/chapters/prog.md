---
layout: page
title: Programming
permalink: /chapter/prog/
categories: chapter
visualizations:
---

# Programming

Programming techniques

* JavaScript
* C#
* C++

## SOLID Principles of Code

The SOLID principles of code describe a set of five rules and guidelines which should improve the quality of written code {% cite Mart03 %}.
Designed as a general guide, the rules also apply to Unity scripts.
In this special case they help with structuring the application logic into classes.

### S: Single Responsibility
Every class or component should be responsible for only a single part of functionality.
This way, a script only needs to be adapted if the one feature that it realized needs to be changed {% cite Mart03 %}.
This approach leads to readable code.
Instead of a few big classes, which are responsible for many different things, the result is a large amount of small, readable classes with defined tasks.
Additionally, such small classes, which focus on one subfeature, are reusable if this subfeature is also required in another context in the application.
Since the classes have a defined responsibility, it is less cumbersome to create behaviour variants since they can be realized by inheritance or by modifying the corresponding class.

As an example, we assume that we need to build a virtual lift.
It consists of a 3D model of its car and the lift shaft.
The lift car is equipped with animated doors that can open and close, as well as a series of buttons for each floor.
Additionally, a set of floors has been created which also have a button to call the lift.
The Single Responsibility principle is violated if the behaviour for the lift is implemented in one large class, which controls the floor selection, movement and door animation.
Instead, for each of these features, a separate class should be created.
For instance, one dedicated class is concerned with moving the lift up and down to the floors.
Another class controls the doors and makes sure that they only open when the lift is stationary at the floors.
For handling the input from a button, a different class can be implemented.
The logic for selecting in which order floors should be served can be implemented in a fourth class.

### O: Open-Closed Principle
The open-closed principles states that classes should be designed in a way that they are open for extension but closed for modification {% cite Mart03 %}.
This means that the class should be extendable by new details, e.g. a varied behaviour.
However, such details do not affect the general functionality of the class and therefore it should be possible to include them without modifying the class.
Especially classes from software libraries need to follow this principle.
If the library is only available in its compiled form, developers cannot modify it.
However, new features can still be added to the class's functionality by inheriting from the library class.

Imagine a test application for courses which asks the user questions and in the end it should process the answers into a final score or grade.
Since the application should be used in different courses with various grading schemes, variants for the scoring of answers are required.
For instance, one course rewards points for correct answers but gives zero points for errors.
In another course, wrong answers deduct points from the total.
The program contains an assessment class which administers the answers to the quiz questions, checks them and converts them to points for the final score.
If the different grading schemes are realized in this class using a case distinction, the class has to be edited for each new score calculation.
This can be seen in the example class ```Assessment1```.

```
/// Assessment1 violates the open-closed principle.
public class Assessment1
{
	private Answer[] answers;
	...
	public int CalculateFinalScore(int gradingSchemeIndex)
	{
		int totalPoints = 0;

		for (int i=0; i < answers.Length;i++)
		{
			switch(gradingSchemeIndex)
			{
				case 0: // no points for wrong answers
					if (answers[i].IsCorrect)
					{
						totalPoints += answers[i].Points;
					}
					else
					{
						totalPoints += 0;
					}
					break;
				case 1: // point deductions for wrong answers
					if (answers[i].IsCorrect)
					{
						totalPoints += answers[i].Points;
					}
					else
					{
						totalPoints -= answers[i].Points;
					}
					break;
				case ... // more calculation methods
				default:
					System.out.println("Undefined Grading Scheme.")
			}
		}

		return totalPoints;
	}
}
```

To follow the open-closed principle, an interface IPointCalculator is introduced which gives access to a score calculation method.
Each grading scheme is refactored into an own class which implements this interface.
Thus, the assessment class can access the interface and does not need to know how the points are calculated in detail.
New variations can be added by creating new classes and the assessment class does not need to be altered.
One can switch between the grading schemes by setting the pointCalculator object to an instance of a specific class which implements the interface, e.g. ```pointCalculator = new ZeroPointsForWrongAnswer()```.

```
public class Assessment2
{
	private Answer[] answers;
	private IPointCalculator pointCalculator;
	...

	public int CalculateFinalScore()
	{
		int totalPoints = 0;

		for (int i=0; i < answers.Length;i++)
		{
			points += pointCalculator.GetAnswerScore(answers[i]);
		}

		return totalPoints;
	}
}

public interface IPointCalculator
{
	int GetAnswerScore(Answer answer);
}

public class ZeroPointsForWrongAnswer : IPointCalculator
{
	public int GetAnswerScore(Answer answer)
	{
		if (answer.IsCorrect)
		{
			return answer.Points;
		}
		else
		{
			return 0;
		}
	}
}

public class DeductionsForWrongAnswer : IPointCalculator
{
	public int GetAnswerScore(Answer answer)
	{
		if (answer.IsCorrect)
		{
			return answer.Points;
		}
		else
		{
			return -answer.Points;
		}
	}
}
```

In general, the open-closed principle can be realized by using inheritance, abstract classes, interfaces and delegate methods.