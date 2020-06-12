n = int(input())

sm = n*(n+1)//2
A = []
B = []

if sm%2 !=0:
  print("NO")
else:
  print("YES")
 
  sm = n*(n+1)//4

  while(n):
    if sm-n >= 0:
      A.append(n)
      sm = sm - n
    else:
      B.append(n)
    n = n-1
  print(len(A))
  A.sort()
  print(*A)
  print(len(B))
  B.sort()
  print(*B)




