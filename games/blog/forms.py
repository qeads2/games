from django import forms

from .models import Post

class PostForm(forms.ModelForm):
	class Meta:
		model = Post
		fields = ('title','text','photo')
		
	def __init__(self, *args, **kwargs):
		super(PostForm, self).__init__(*args, **kwargs)
		self.fields['photo'].required = False

class DeleteForm(forms.ModelForm):
	class Meta:
		model = Post
		fields= []