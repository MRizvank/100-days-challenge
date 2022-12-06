import os
path="C:\\Users\\hp\\OneDrive\\Desktop\\Git\\100-days-challenge"
os.chdir(path)
for i in range(1,101):
    name="Day"+"-"+str(i)
    os.makedirs(name)