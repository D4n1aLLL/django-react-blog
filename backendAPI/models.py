""" MODELS """
from django.db import models

STATUS = ((0, "Draft"), (1, "Publish"))
# Create your models here.
class Post(models.Model):
    """ POST MODEL  """
    title = models.CharField(max_length=256, blank=False, null=False, unique=True)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    status = models.IntegerField(choices=STATUS, default=0)
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title


class Comment(models.Model):
    """ COMMENT MODEL """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body

# class Like(models.Model)
