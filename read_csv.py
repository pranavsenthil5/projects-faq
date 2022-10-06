import csv
from traceback import print_tb
with open('covid_faq.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print("-"*100)
        print("\n\n")
        print("Question: " + row['questions'])
        print("\n")
        print("Answer: "+row['answers'])
        print("\n\n")
    print(reader)
