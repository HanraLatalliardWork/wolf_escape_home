import list as TO_Download

#print(dir(TO_Download))

def writeTo(fileName,level,content):
    f=open(fileName,level)
    if level=="r" or level=="r+" or level=="rb":
        e=f.read()
        f.close()
        return e
    else:
        if type(content)==type("e"):
            f.write(content)
        else:
            f.write(str(content))
        f.close()

class treat:
    def __init__(self):
        self.e=""
    def firstLayer(self,listToTreat):
        """Treat first layer of the list"""
        ToWrite=""
        for i in range(len(listToTreat)):
            #print(listToTreat[i])
            ToWrite+=treat.secondLayer(self,listToTreat[i])
        ToWrite+="\n\\n\\n\n"
        return ToWrite
    def secondLayer(self,listToTreat):
        ToWrite=""
        for i in range(len(listToTreat)):
            #print(listToTreat[i])
            ToWrite+=listToTreat[i]
            ToWrite+="\n"
        ToWrite+="\n\\n\n"
        return ToWrite
        

To_Treat=TO_Download.main_for_rec
To_Treat_Dict=TO_Download.main_for_rec_dict
TI=treat()
r=TI.firstLayer(To_Treat)
#print()
#print(r)
writeTo("liist.py","w",r)

class unTreat:
    def __init__(self):
        self.BigList="\\n\\n"
        self.childList="\\n"
        self.subChildren="\n"
    def Layers(self,element):
        """decompose the string into the first layer of lists"""
        temp=element.split(self.BigList)
        temp2=[]
        for i in range(len(temp)):
            #print(temp[i])
            temp2.append(temp[i].split(self.childList))
        #print(temp2)
        listMain=[]
        for i in range(len(temp2)):
            for b in range(len(temp2[i])):
                temp3=temp2[i][b].split(self.subChildren)
                listMain.append(temp3)
        #print("\n\n\\n\\n\\n\n\n")
        #print(listMain)
        toPop=[]
        for i in range(len(listMain)):
            #toPop.append(i)
            temp1=[]
            for b in range(len(listMain[i])):
                #temp1.append(b)
                temp2=[]
                #print("in b")
                if listMain[i][b]=="":
                    temp2.append(b)
                temp1.append(temp2)
            toPop.append(temp1)
        #print(toPop)
        #for i in range(len(toPop)):
        #    print(f"toPop[{i}]={toPop[i]}")
        #    for b in range(len(toPop[i])):
        #        print(f"toPop[{i}][{b}]={toPop[i][b]}")
        #        for c in range(len(toPop[i][b])):
        #            print(f"toPop[{i}][{b}][{c}]={toPop[i][b][c]}")
        #            print(f"[{i}][{b}][{c}]={listMain.pop(toPop[i][b][c])}")
                #print(f"toPop[{i}][{b}]={toPop[i][b]}")
        return listMain#,toPop
UI=unTreat()
m=UI.Layers(r)
#t=m[1]
#m=m[0]
