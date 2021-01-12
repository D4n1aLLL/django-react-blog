""" IMPORTS """
from rest_framework import serializers
from .models import Post, Comment

class CommentSerialzer(serializers.ModelSerializer):
    """ COMMENT SERIALZER """
    class Meta:
        model = Comment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerialzer(many=True, read_only=True)
    """ POST SERIALZER """
    class Meta:
        model = Post
        fields = '__all__'

