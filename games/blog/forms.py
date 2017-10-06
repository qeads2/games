from django import forms
# from django_bootstrap_markdown.widgets import MarkdownInput
from .models import Post

class PostForm(forms.ModelForm):
	class Meta:
		model = Post
		fields = ('title','text','photo')
		
	def __init__(self, *args, **kwargs):
		super(PostForm, self).__init__(*args, **kwargs)
		self.fields['photo'].required = False
		self.fields['text'].widget.attrs.update({'data-provide':'markdown'})
		self.fields['title'].widget.attrs.update({'placeholder':'제목을 입력해주세요.'})

class SearchForm(forms.ModelForm):
	class Meta:
		model = Post
		fields = ('title',)

	def __init__(self, *args,**kwargs) :
		super(SearchForm,self).__init__(*args, **kwargs)
		self.fields['title'].widget.attrs.update({'placeholder''제목을 검색하세요.'})


class DeleteForm(forms.Form):
	class Meta:
		model = Post
		fields= []