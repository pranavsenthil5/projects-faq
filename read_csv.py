import csv
from itertools import count
import json
from traceback import print_tb

output_list = list()
count = 1
with open('covid_faq.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        row["id"] = str(count)
        count += 1
        output_list.append(row)
        # print("-"*100)
        # print("\n\n")
        # print("Question: " + row['questions'])
        # print("\n")
        # print("Answer: "+row['answers'])
        # print("\n\n")
json_obj = json.dumps(output_list, indent=4)
print(json_obj)

jsonFile = open("covid_faq_data.json", "w")
jsonFile.write(json_obj)
jsonFile.close()
