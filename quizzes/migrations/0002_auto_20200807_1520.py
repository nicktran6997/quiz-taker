from django.db import migrations

sampleQuizData = [
  {
    "question":"What's the last name of our ultra-dependable protagonist, Estelle?",
    "choices": ["Astray", "Bright", "Harvey", "Rinz"],
    "answerIndex": 1,
  },
  {
    "question":"What's the first name of Estelle's late mother?",
    "choices": ["Hannah", "Stella", "Lena", "Tabitha"],
    "answerIndex": 2,
  },
  {
    "question":"What's the name of harmonica-playing heartthrob Joshua's blood-related sister?",
    "choices": ["Estelle", "Scherazard", "Luciola", "Karin"],
    "answerIndex": 3,
  },
  {
      "question":"What's the first name of softer-than-he-looks bracer Agate's late sister?",
      "choices": ["Millia", "Mischa", "Aisha", "Tita"],
      "answerIndex": 1,
  },
  {
      "question": "What is the color of 'Cuteness is justice!' advocate Anelace's hair ribbon?",
      "choices": ["Yellow", "Green", "Red", "Blue"],
      "answerIndex": 0,
  },
]
def create_data(apps, schema_editor):
    Quiz = apps.get_model('quizzes', 'Quiz')
    Quiz.objects.all().delete() #first clear all data

    q = Quiz(title="Trails-in-the-Sky-Quiz")
    q.save()
    for block in sampleQuizData:
        QuestionBlock = apps.get_model('quizzes', 'QuestionBlock')
        qb = QuestionBlock(question=block['question'], correctChoice = block['answerIndex'], quiz=q)
        qb.save()
        for i in range(len(block['choices'])):
            Choice = apps.get_model('quizzes', 'Choice')
            Choice(text=block['choices'][i], question=qb).save()


class Migration(migrations.Migration):

    dependencies = [
        ('quizzes', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
