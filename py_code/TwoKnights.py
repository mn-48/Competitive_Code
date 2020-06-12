nn = int(input())
for n in range(1,nn+1):
  a,b=0,0
  a = n*n*(n*n-1)//2
  b = 4*(n-1)*(n-2)
  print(a-b)

