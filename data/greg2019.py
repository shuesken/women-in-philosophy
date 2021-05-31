import pandas as pd
import numpy as np

#%%% Load New Data
df = pd.read_csv( './Greg_2019.csv', low_memory=False)
df["Year"] = 2019
df["Proportion"] = (df["# TT Women 2019"] * 100 / df["Total # TT 2019"]).round(1)


#%%% LOAD OLD DATA

labels = ['Arizona State University', 'Baylor University', 'SUNY Binghamton', 'Boston College', 'Boston University', 'Bowling Green State University', 'Brown University', 'Carnegie-Mellon University', 'Catholic University of America', 'City University of New York Graduate Center', 'Columbia University (incl. Barnard)', 'Cornell University', 'DePaul University', 'Duke University', 'Duquesne University', 'Emory University', 'Florida State University', 'Fordham University', 'Georgetown University', 'Harvard University', 'Indiana University, Bloomington', 'Johns Hopkins University', 'Loyola University-Chicago', 'Marquette University', 'Massachusetts Institute of Technology', 'Michigan State University', 'New School University', 'New York University', 'Northwestern University', 'Ohio State University', 'Pennsylvania State University', 'Princeton University', 'Purdue University', 'Rice University', 'Rutgers University', 'SUNY Albany', 'SUNY Buffalo', 'SUNY Stony Brook', 'Saint Louis University', 'Southern Illinois University at Carbondale', 'Stanford University', 'Syracuse University', 'Temple University', 'Texas A&M University', 'Tulane University', 'UC Santa Cruz', 'University of Arizona', 'University of Arkansas', 'University of California, Berkeley', 'University of California, Davis', 'University of California, Irvine', 'University of California, Los Angeles', 'University of California, Riverside', 'University of California, San Diego', 'University of California, Santa Barbara', 'University of Chicago', 'University of Cincinnati', 'University of Colorado, Boulder', 'University of Connecticut', 'University of Dallas', 'University of Florida', 'University of Georgia', 'University of Hawaii-Manoa', 'University of Illinois, Champaign-Urbana', 'University of Illinois, Chicago', 'University of Iowa', 'University of Kansas', 'University of Kentucky', 'University of Maryland, College Park', 'University of Massachusetts, Amherst', 'University of Memphis', 'University of Miami', 'University of Michigan', 'University of Minnesota, Twin Cities', 'University of Missouri, Columbia', 'University of Nebraska', 'University of New Mexico', 'University of North Carolina, Chapel Hill', 'University of Notre Dame', 'University of Oklahoma', 'University of Oregon', 'University of Pennsylvania', 'University of Pittsburgh', 'University of Rochester', 'University of South Carolina', 'University of South Florida', 'University of Southern California', 'University of Tennessee-Knoxville', 'University of Texas, Austin', 'University of Utah', 'University of Virginia', 'University of Washington', 'University of Wisconsin, Madison', 'Vanderbilt University', 'Villanova University', 'Washington University, St. Louis', 'Wayne State University', 'Yale University']

colors={
    2004: ["c_not","c_unr","c_unr","c_unr","c_not","c_unr","c_top","c_not","c_unr","c_not","c_top","c_top","c_unr","c_not","c_unr","c_unr","c_not","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_unr","c_unr","c_top","c_not","c_not","c_unr","c_top","c_unr","c_not","c_top","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_unr","c_unr","c_unr","c_top","c_unr","c_top","c_not","c_top","c_top","c_not","c_top","c_not","c_top","c_unr","c_not","c_not","c_unr","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_unr","c_top","c_top","c_unr","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_not","c_unr","c_top","c_not","c_not","c_not","c_not","c_unr","c_unr","c_unr","c_unr","c_top"] ,
    2006: ["c_not","c_unr","c_unr","c_unr","c_not","c_unr","c_not","c_not","c_unr","c_top","c_top","c_top","c_unr","c_not","c_unr","c_unr","c_not","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_unr","c_unr","c_top","c_not","c_not","c_unr","c_top","c_unr","c_not","c_top","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_unr","c_unr","c_unr","c_top","c_unr","c_top","c_not","c_top","c_top","c_not","c_top","c_not","c_top","c_unr","c_not","c_not","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_unr","c_top","c_not","c_not","c_unr","c_unr","c_top","c_top","c_unr","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_not","c_unr","c_top","c_unr","c_not","c_not","c_not","c_unr","c_unr","c_not","c_unr","c_not"] ,
    2008: ["c_not","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_not","c_top","c_top","c_unr","c_not","c_unr","c_unr","c_not","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_unr","c_unr","c_top","c_unr","c_not","c_unr","c_top","c_unr","c_unr","c_top","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_unr","c_unr","c_unr","c_top","c_unr","c_top","c_not","c_top","c_top","c_not","c_top","c_not","c_top","c_unr","c_not","c_not","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_unr","c_top","c_top","c_unr","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_top","c_unr","c_top","c_unr","c_not","c_not","c_not","c_unr","c_unr","c_not","c_unr","c_top"] ,
    2010: ["c_unr", "c_unr", "c_unr", "c_unr", "c_not", "c_unr", "c_top", "c_not", "c_unr", "c_top", "c_top", "c_top", "c_unr", "c_not", "c_unr", "c_unr", "c_unr", "c_unr", "c_not", "c_top", "c_not", "c_not", "c_unr", "c_unr", "c_top", "c_unr", "c_unr", "c_top", "c_not", "c_not","c_unr", "c_top", "c_unr", "c_not", "c_top", "c_unr", "c_unr", "c_unr", "c_unr", "c_unr", "c_top", "c_not", "c_unr", "c_unr", "c_unr",           "c_unr", "c_top", "c_unr", "c_top", "c_not", "c_not", "c_top", "c_not", "c_not", "c_not", "c_not", "c_unr", "c_not", "c_not", "c_unr","c_unr", "c_unr", "c_unr", "c_not", "c_not", "c_unr", "c_unr", "c_unr", "c_not", "c_not", "c_unr", "c_not", "c_top", "c_not", "c_unr","c_unr", "c_unr", "c_top", "c_top", "c_unr", "c_unr", "c_not", "c_top", "c_not", "c_unr", "c_unr", "c_top", "c_unr", "c_top", "c_unr","c_not", "c_not", "c_not", "c_unr", "c_unr", "c_not", "c_unr", "c_top"],
    2011: ["c_unr","c_unr","c_unr","c_unr","c_not","c_unr","c_top","c_not","c_unr","c_top","c_top","c_top","c_unr","c_not","c_unr","c_unr","c_unr","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_unr","c_unr","c_top","c_not","c_not","c_unr","c_top","c_unr","c_not","c_top","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_unr","c_unr","c_unr","c_top","c_unr","c_top","c_not","c_not","c_top","c_not","c_not","c_not","c_top","c_unr","c_not","c_unr","c_unr","c_unr","c_unr","c_unr","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_unr","c_top","c_top","c_unr","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_top","c_unr","c_top","c_unr","c_not","c_not","c_not","c_unr","c_unr","c_not","c_unr","c_top"] ,
    2015: ["c_unr","c_unr","c_unr","c_unr","c_unr","c_unr","c_top","c_not","c_unr","c_top","c_top","c_top","c_unr","c_not","c_unr","c_unr","c_not","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_unr","c_unr","c_top","c_not","c_not","c_unr","c_top","c_unr","c_not","c_top","c_unr","c_unr","c_unr","c_not","c_unr","c_top","c_not","c_unr","c_unr","c_unr","c_unr","c_top","c_unr","c_top","c_not","c_not","c_top","c_not","c_not","c_not","c_not","c_unr","c_not","c_not","c_unr","c_unr","c_unr","c_unr","c_unr","c_not","c_unr","c_unr","c_unr","c_not","c_not","c_unr","c_not","c_top","c_not","c_not","c_unr","c_unr","c_top","c_top","c_unr","c_unr","c_not","c_top","c_not","c_unr","c_unr","c_top","c_unr","c_top","c_unr","c_not","c_unr","c_not","c_unr","c_unr","c_not","c_unr","c_top"] ,
}

ranking={
    2004: [46,999,999,999,42,999,16,36,999,25,7,16,999,28,999,999,44,999,42,8,25,36,999,999,8,999,999,1,46,22,999,1,999,39,1,999,999,999,999,999,6,32,999,999,999,999,8,999,13,24,20,8,32,20,40,16,999,28,40,999,999,999,999,42,36,999,999,999,30,30,999,46,4,32,53,999,999,12,14,999,999,25,5,46,999,999,46,999,14,48,42,32,24,999,999,999,999,16] ,
    2006: [47,999,999,999,47,999,21,34,999,18,6,11,999,29,999,999,43,999,41,6,29,41,999,999,6,999,999,1,41,21,999,3,999,41,2,999,999,999,999,999,6,32,999,999,999,999,16,999,15,27,17,6,29,18,41,18,999,38,47,999,41,999,999,999,34,999,999,999,25,27,999,999,4,34,48,999,999,11,11,999,999,32,4,47,999,999,23,999,11,999,38,34,23,999,999,38,999,25] ,
    2008: [44,999,999,999,50,999,16,39,999,23,10,16,999,27,999,999,44,999,39,7,27,35,999,999,7,999,999,1,53,26,999,3,999,50,2,999,999,999,999,999,6,32,999,999,999,999,13,999,12,35,20,7,31,20,39,20,999,32,48,999,48,999,999,50,35,999,999,999,27,24,999,32,3,44,50,999,999,10,13,999,999,27,5,44,999,999,16,999,13,999,39,35,24,999,999,39,999,16] ,
    2010: [999,999,999,999,48,999,17,36,999,15,13,17,999,26,999,999,999,999,36,6,23,43,999,999,6,999,999,1,41,26,999,3,999,48,2,999,999,999,999,999,9,34,999,999,999,999,13,999,9,36,23,9,30,21,41,21,999,26,43,999,999,999,999,48,36,999,999,999,30,26,999,34,5,47,999,999,999,9,15,999,999,30,4,48,999,999,17,999,20,999,36,43,23,999,999,30,999,8] ,
    2011: [999,999,999,999,44,999,19,40,999,14,11,14,999,24,999,999,999,999,36,5,24,37,999,999,7,999,999,1,31,24,999,3,999,44,2,999,999,999,999,999,9,37,999,999,999,999,14,999,14,44,29,11,31,22,40,20,999,24,50,999,999,999,999,999,40,999,999,999,31,24,999,31,4,44,999,999,999,9,18,999,999,29,5,44,999,999,11,999,20,999,37,43,22,999,999,31,999,7] ,
    2015: [999,999,999,999,999,999,20,40,999,16,10,17,999,24,999,999,45,999,37,6,24,40,999,999,13,999,999,1,31,28,999,2,999,47,2,999,999,999,47,999,8,37,999,999,999,999,13,999,10,42,24,10,28,23,42,21,999,31,37,999,999,999,999,999,42,999,999,999,31,28,999,31,4,47,47,999,999,13,17,999,999,31,6,45,999,999,8,999,17,999,31,999,21,999,999,24,999,5] ,

}
proportions={
    2004: [12.5,None,26.7,13.0,7.1,20.0,27.3,11.1,15.8,22.0,34.8,17.6,36.4,7.1,36.4,20.0,15.4,16.7,18.8,33.3,26.7,30.0,23.3,None,25.0,30.4,36.4,17.6,18.8,23.5,41.2,5.6,None,16.7,13.8,22.2,7.1,22.2,18.2,15.4,25.0,15.0,20.0,15.0,9.1,25.0,26.3,12.5,13.3,16.7,14.3,18.8,11.1,21.1,8.3,10.5,15.4,16.7,23.5,None,12.5,25.0,23.1,7.1,33.3,18.2,23.1,12.5,15.8,25.0,None,25.0,15.0,28.0,13.3,27.3,18.2,10.5,13.0,23.1,30.0,23.1,16.7,8.3,15.4,23.1,20.0,25.0,6.2,41.2,13.3,35.3,13.0,20.0,None,8.3,10.0,29.4] ,
    2006: [17.6,16.7,30.8,13.0,7.7,16.7,21.4,6.7,16.7,25.0,30.4,16.7,40.9,20.0,23.1,25.0,20.0,22.2,18.8,27.8,23.5,30.0,25.9,None,25.0,36.0,33.3,17.6,18.2,20.0,46.7,15.0,19.0,0.0,14.3,33.3,11.1,17.4,15.0,7.7,26.9,13.6,31.2,15.0,18.2,22.2,26.3,12.5,17.6,8.3,11.1,17.6,16.7,21.1,9.1,15.0,8.3,20.0,26.3,0.0,11.8,46.2,23.1,11.8,31.6,25.0,20.0,13.3,14.3,28.6,28.6,18.2,9.1,26.3,13.3,27.3,25.0,10.5,14.3,28.6,33.3,40.0,16.7,16.7,18.8,20.0,16.7,27.3,5.9,41.2,18.8,35.0,15.8,26.3,31.6,20.0,9.1,35.0] ,
    2008: [23.5,7.1,38.5,20.8,12.0,11.1,25.0,13.3,17.6,22.9,26.9,26.3,36.4,22.2,23.1,25.0,16.7,20.0,23.3,26.3,33.3,20.0,30.8,None,28.6,30.4,12.5,17.6,31.2,19.0,43.8,18.2,13.6,18.2,14.7,30.0,10.0,26.1,20.0,7.1,22.7,10.5,20.0,17.4,20.0,11.1,27.3,22.2,18.8,9.1,15.0,17.6,25.0,20.0,9.1,17.4,25.0,19.2,14.3,0.0,6.2,46.7,18.2,16.7,31.2,25.0,18.2,21.4,25.0,25.0,35.7,12.5,20.0,27.8,16.7,25.0,27.3,16.7,15.8,21.4,36.4,40.0,6.7,18.2,25.0,26.7,22.7,12.5,10.7,41.2,22.2,42.1,12.5,31.6,38.1,23.8,18.2,28.0] ,
    2010: [23.5,7.1,38.5,20.8,11.5,11.1,25.0,13.3,19.0,22.9,26.9,26.3,36.4,22.2,None,25.0,16.7,20.0,23.3,23.8,33.3,20.0,30.8,None,28.6,30.4,12.5,17.6,31.2,19.0,43.8,18.2,13.6,18.2,14.7,33.3,10.0,26.1,20.0,7.1,22.7,10.0,20.0,17.4,20.0,11.1,27.3,22.2,30.0,23.1,8.0,17.6,20.0,15.8,9.1,17.4,25.0,19.2,14.3,0.0,8.3,46.7,18.2,16.7,31.2,22.2,18.2,22.2,25.0,25.0,35.7,12.5,20.0,27.8,18.8,25.0,27.3,16.7,15.8,21.4,36.4,40.0,6.7,18.2,25.0,26.7,22.7,12.5,10.7,41.2,22.2,42.1,12.5,31.6,38.1,25.0,18.2,28.0] ,
    2011: [20.0,0.0,33.3,21.7,11.1,10.0,26.7,20.0,23.8,21.6,29.2,25.0,35.0,29.4,33.3,31.2,15.4,22.6,28.6,21.1,40.0,20.0,29.6,None,28.6,21.7,30.0,18.2,31.2,23.8,41.2,18.2,14.3,21.4,16.7,33.3,10.5,25.0,20.0,7.7,25.0,21.1,20.0,20.0,20.0,0.0,22.2,22.2,25.0,27.3,15.8,16.7,17.6,15.8,16.7,20.0,28.6,20.0,15.4,0.0,10.0,50.0,25.0,28.6,33.3,30.0,18.2,26.7,23.8,30.8,28.6,12.5,21.4,26.3,20.0,23.1,27.3,20.0,15.0,26.7,40.0,42.9,18.5,18.2,26.7,18.8,23.1,0.0,7.4,41.2,22.2,42.1,17.6,31.2,36.4,22.2,22.2,24.0] ,
    2015: [38.5,16.7,42.9,20.0,16.7,25.0,26.7,7.1,25.0,18.4,37.5,38.9,35.3,23.5,25.0,41.2,13.3,32.1,35.7,25.0,37.5,25.0,33.3,29.2,9.1,25.0,36.4,22.2,29.4,25.0,42.9,18.2,20.0,25.0,21.4,30.0,15.0,33.3,19.0,8.3,27.3,18.8,27.3,20.0,15.4,30.0,28.6,11.1,16.7,40.0,20.0,22.2,25.0,23.8,18.2,19.0,33.3,20.0,22.2,9.1,10.0,42.9,25.0,33.3,31.2,46.2,30.0,25.0,25.0,28.6,25.0,25.0,19.4,40.0,25.0,16.7,38.5,17.4,17.1,31.2,38.5,28.6,22.2,25.0,33.3,17.6,22.7,18.2,16.7,50.0,31.2,43.8,22.7,31.2,42.1,31.6,22.2,19.2] ,
}


for year in [2004,2006,2008,2010,2011,2015]:
    for (i, school) in enumerate(labels):
        df = df.append({
            "Year": year, 
            "School": school,
            "Country": "United States",
            "Color": colors[year][i],
            "Ranking": ranking[year][i],
            "Proportion": proportions[year][i]
        }, ignore_index=True)

df = df.sort_values(by=['School'])
#%%% Generate summary
print(f"labels: {np.array2string(df.School.unique(), separator=',', max_line_width=999999)},\n")

print("colors:{")
for year in [2004,2006,2008,2010,2011,2015, 2019]:
    val = np.array2string(df[df.Year == year].Color.to_numpy(), separator=',', precision=2, max_line_width=999999).replace("'","")
    print(f"\t{year}: {val},")
print("},\n")

print("ranking:{")
for year in [2004,2006,2008,2010,2011,2015, 2019]:
    val = np.array2string(df[df.Year == year].Ranking.to_numpy(), separator=',', precision=2, max_line_width=999999)
    print(f"\t{year}: {val},")
print("},\n")

print("proportions:{")
for year in [2004,2006,2008,2010,2011,2015, 2019]:
    val =np.array2string(df[df.Year == year].Proportion.to_numpy(), separator=',', precision=2, max_line_width=999999).replace('None','null')
    print(f"\t{year}: {val},")
print("},\n")