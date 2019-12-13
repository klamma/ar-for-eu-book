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

### L: Liskov Substitution Principle

The Liskov substitution principle describes that if a class A has a property P then anay child class B of A must also have the property P {% cite Mart03 %}.
An implication of this is that any class that references an object of type A can also work with instances of type B without knowing about the specific type.

The Liskov substitution principle can be used to verify that an inheritance between two classes is actually well modelled.
When designing a programme architecture, developers usually try to find "is a"-relationships which are then modelled using inheritance.
For instance, assume that we would like to model an application, which simulates the behaviour of cats.
The application should support and distinguish different breeds of cats, e.g. the Persian cat.
Since a Persian cat is a cat, one can model this with a superclass ```Cat``` and a child class ```PersianCat```.
The superclass holds all properties and logic, which are common with cats, e.g. their age, height, fur or eye colour.
In addition to this, the application also contains an object ```Brush``` with a function ```Groom```.
We want to groom all implemented breeds of cats and so the function takes an object of type ```Cat``` as input and returns a cat with groomed fur.
Once this implementation is finished, we add new breeds to the application, e.g. European shorthairs and Sphynx cats.
With the European shorthairs, everything still works fine but with the Sphynx cats, there is an error.
Sphynx cats are hairless cats which means that the ```Groom``` function does not make sense for these cats.
However, the ```Groom``` function takes a generic ```Cat``` as input which means that Sphynx cats are allowed as input.
The bad way to fix this is to create a case distinction in the ```Groom``` function:
```
public Cat Groom(Cat inputCat)
{
	if (inputCat instance of Sphynx)
	{
		// do not groom hairless cats
		return inputCat;
	}
	else
	{
		// perform grooming procedure
		...
	}
}
```
This solution violates the Liskov substitution principle because now the ```Groom``` function cannot just work with any cat type but needs to know which specific subtype the cat object has.
The violation is caused by incorrect assumptions about cats, e.g. that all of them have fur.
If further hairless cats like the Ukrainian Levkoy are added to the application, they also require separate case distinctions.
Instead, a better solution is to refactor the inheritance hierarchy.
In this case, a ```Cat``` superclass can be created with the child classes ```HairlessCat``` and ```CatWithHair```.
The cat breeds are children of one of these two classes.
This way, the ```Groom``` function can now expect a ```CatWithHair``` object as input.

### I: Interface Segregation Principle



### D: Dependency Inversion Principle