from sys import argv

script, filename = argv
#print ("f=", filename)
txt = open (filename)
print ('File content %r' %(filename))
print (txt.read())
print ('input filename again')
file_again = input('>')
txt_again = open (file_again)
print (txt_again.read())











#'это был таск 12


#script, first = argv
#print ('this script is called', script)
#print ('my first variable called', first)
#print ('my second variable called', second)
#print ('my third variable called', third)
#arg1 = input ('input arg 1')
#arg2 = input ('input arg 2')
#print ('so, arg1 = ', arg1, 'and arg2 = ', arg2)





