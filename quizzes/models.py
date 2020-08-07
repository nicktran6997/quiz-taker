from django.db import models

# Create your models here.
class Quiz(models.Model):
    #Every Quiz has a title
    title = models.CharField(max_length=40, unique=True, primary_key=True)

    def __str__(self):
        return self.title

class QuestionBlock(models.Model):
    #Every QuestionBlock has a question, an answer, and a quiz it belongs to
    question = models.CharField(max_length=40)
    correctChoice = models.IntegerField(default=0)
    quiz = models.ForeignKey(Quiz, related_name="questions", to_field="title", on_delete=models.CASCADE) #assume for this proj, we dont reuse same question for diff quizzes

    def __str__(self):
        return self.question

class Choice(models.Model):
    #optionally could use mongoDB to avoid hassle with making another table
    #could also try serialization too...

    #Every Choice has some text and belongs to a questionBlock
    text = models.CharField(max_length=40)
    question = models.ForeignKey(QuestionBlock, related_name="choices", on_delete=models.CASCADE)

    def __str__(self):
        return self.text
