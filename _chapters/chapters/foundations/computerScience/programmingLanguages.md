---
layout: reading_chapter
title: Programming
hide: true
permalink: /chapter/foundations/computerScience/programming/
redirect_from: /chapter/prog/
categories: chapter
visualizations:
---

## Which Programming Language Should I Learn to get Started With AR Development?

There are different technologies and engines available to create AR applications.
One option is the 3D engine Unity where application logic can be implemented in *C#* {% cite Ferr19b %}.

When using the Unreal Engine, implementations can be done in *C++* {% cite DSWh19 %}.
However, C++ is not an essential prerequisite for the Unreal Engine as it also provides a visual scripting language called *Blueprint* {% cite Ferr19c %}.

Another option is to develop AR experiences for the Web.
In this case, you should study Web technologies and the scripting language *JavaScript*.

## SOLID Principles of Code {#SOLID}

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

The Liskov substitution principle describes that if a class A has a property P then any child class B of A must also have the property P {% cite Mart03 %}.
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

The interface segregation principle states that interfaces should be granular.
Hence, a class that implements the interface never has to include additional methods, which are defined in the interface but which are not used {% cite Mart03 %}.
This means that large interfaces, which are used for different purposes of clients, should be split into smaller interfaces.
These smaller interfaces should group the methods, which are relevant in a specific context.

An example for a violation of the interface segregation principle is an ```IButton``` interface.
Classes which implement this interface must contain all methods that make it an interactive button, e.g. ```OnFocusEnter()```, ```OnFocusExit()```, ```OnClick()```.
The problem of this interface is that it combines the two concepts of reacting to user focus, i.e. pointing at the button with an input device, and the interaction with the button in the form of a click.
If an interactive element should be created which should rotate on focus but has no other interactive features, the ```IButton``` interface is not suitable.
It can be implemented by a class that models the behaviour of such an element but this means that the ```OnClick()``` method will be left empty.
Instead, a better solution is to separate the different properties, which are described by the interface.
There can be an interface ```IFocusable```.
Elements that should react to user focus can implement this interface.
Additionally, an interface ```IInputHandler``` can be defined for elements that should also react to input events.

### D: Dependency Inversion Principle

A common practise is to layer classes and modules in a way that higher-level classes access functionality from lower-level classes.
An example for this can be seen in the following simplified architecture for I/O operations in a programme, which violates the dependency inversion principle.
On the lowest level, there is an ```IOOperations``` class which takes byte data and writes them to a file.
In this process, it handles the operations on the file system such as creating the file, locking it, writing data and unlocking it.
One level higher, an ```Encoding``` class handles the conversion of the in-memory data to the byte save data.
It takes some input text, converts it to byte data and adds the corresponding byte headers.
To write the byte data to the disk, it calls the write function which is implemented in ```IOOperations``` one level lower.
On the highest level, a ```Save``` module fetches the application's data which need to be saved.
If it needs to save text, e.g. which has been entered by the user, it passes the text to the ```Encoding``` class which will turn it into bytes.
In turn, the ```Encoding``` class will pass the byte data to the ```IOOperations``` class.

This architecture violates the dependency inversion principle because it states that higher modules should not depend on lower modules {% cite Mart03 %}.
In this case, the ```Save``` module depends on the ```Enconding``` class by calling its methods and ```Enconding``` depends on ```IOOperations```.
If the architecture is changed, e.g. it is decided to re-name the write-function in the ```IOOperations``` class, this means that the ```Encoding``` class must also be altered.

A solution is that the high-level class defines an interface.
The high-level class only works with this abstract description.
The low-level class now needs to implement this interface.
Hence, the dependency is inverted.
The low-level class now depends on the interface definitions, which are defined by the high-level class.
In the example, the two interfaces ```IFileWriter``` and ```IEnconder``` are added.
```IFileWriter``` is used by the ```Enconding``` class to write content to the disk.
```IOOperations``` now needs to be an implementation of ```IFileWriter```.
Similarly, the interface ```IEncoder``` is used by the ```Save``` module to encode the content.
The specific implementation of the interface is provided by the ```Encoding``` class.