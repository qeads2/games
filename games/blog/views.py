
from django.shortcuts import redirect
from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
from .forms import PostForm
from django.http import HttpResponseRedirect
from .forms import DeleteForm
from django.conf import settings
# Create your views here.

def post_list(request):	
    posts = Post.objects.all().order_by('-created_date')
    return render(request, 'blog/newsfeed.html', {'posts':posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html',{'post':post})    
	

def post_delete(request, pk):
    q = Post.objects.get(pk=pk)
    if request.method == "POST" :
        q.delete()  
        return HttpResponseRedirect('/')
    else :
        return render(request, 'blog/newsfeed.html', {'form':form})
    # return render(request, 'blog/newsfeed.html',{'q':q})


def post_new(request):

    if request.method == "POST" :
        form = PostForm(request.POST,request.FILES)
        if form.is_valid() :
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_list')
    else :
        form = PostForm()

    return render(request, 'blog/page_edit.html', {'form':form})

def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    
    if (request.method == "POST"):
        if (post.photo != request.FILES['photo']) :
            post.photo.delete()
        form = PostForm(request.POST,request.FILES,instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_list')
    else :
        form = PostForm(instance=post)

    return render(request, 'blog/page_edit.html', {'form': form, 'post':post})

