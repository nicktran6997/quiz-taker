from django.test import TestCase
from .models import Quiz, QuestionBlock, Choice
# Create your tests here.

#Mostly sanity checks and simple Unit tests for brevity 
#considering that some factors such as scalability won't be strictly enforced
class QuizRelationsTests(TestCase):

    def setUp(self):
        self.quiz = Quiz(title="LionFacts")
        self.qblock = QuestionBlock(question="Which continent do lions primarily live in?", correctChoice=0, quiz=self.quiz)
        self.choices = [Choice(text=choice, question=self.qblock) for choice in ["Africa", "Antartica", "London", "North America"]]

    def test_quiz_creation(self):
        self.assertTrue(isinstance(self.quiz, Quiz))
        self.assertEquals(str(self.quiz), self.quiz.title)

    def test_qblock_creation(self):
        self.assertTrue(isinstance(self.qblock, QuestionBlock))
        self.assertEquals(str(self.qblock), self.qblock.question)
        
    def test_choices_creation(self):
        self.assertEquals(len(self.choices), 4) 
        for choice in self.choices:
            self.assertTrue(isinstance(choice, Choice))
            self.assertEquals(choice.text, str(choice))
    
    def test_quiz_qblock_relation(self):
        #check if one-many relation between quiz and questionblock is enforced properly

        self.assertTrue(isinstance(self.qblock.quiz, Quiz))
        self.assertEquals(self.qblock.quiz, self.quiz)
    
    def test_qblock_choice_relation(self):
        #check if one-many relation between questionblock and choice is enforced properly

        for choice in self.choices:
            self.assertTrue(isinstance(choice.question, QuestionBlock))
            self.assertEquals(choice.question, self.qblock)
