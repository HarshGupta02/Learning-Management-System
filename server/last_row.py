with open("./attendance.csv","r") as file: 
	data = file.readlines() 
lastRow = data[-1]

print(lastRow)