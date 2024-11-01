# from django.shortcuts import render
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Post
# import json

# @csrf_exempt
# def create_post(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         post = Post(title=data['title'], content=data['content'])
#         return JsonResponse({'message': '게시물이 성공적으로 저장되었습니다.'})
#     return JsonResponse({'error': '잘못된 요청입니다.'}, status=400)