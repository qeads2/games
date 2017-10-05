from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    # file = models.FileField(null=True)
    photo = models.ImageField(blank=True,upload_to="blog/%Y/%m/%d" )
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)


    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def delete(self, *args,**kwargs) :
        self.photo.delete()
        super(Post,self).delete(*args, **kwargs)


    def __str__(self):
        return self.title