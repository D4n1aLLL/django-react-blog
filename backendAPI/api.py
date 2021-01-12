""" IMPORTS """
from rest_framework import viewsets, permissions
from .serializers import PostSerializer, CommentSerialzer
from .models import Post, Comment

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = PostSerializer

    # def get_queryset(self):
    #     return self.request.

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = CommentSerialzer

    # def get_queryset(self):
    #     return self.request.comment.all()

    # def perform_create(self,serializer):
    #     serializer.save(post=self.request.post)
