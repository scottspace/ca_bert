import json

def map_one(j):
   out = {}
   j = json.loads(j)
   out['username'] = j['who']
   out['userImage'] = 'https://'+j['who']+'/favicon.ico'
   out['postImage'] = j['image']
   out['likes'] = j['topic']
   out['hasBeenLiked'] = False
   out['caption'] = j['title']+' '+j['snippet']
   out['filter'] = 'lofi'
   out['url'] = j['url']
   return out

def process(fname):
   out = "const posts = [\n"
   comma = False
   with open(fname,'r') as fh:
     for line in fh:
       if comma:
           out += ",\n"
       else:
           comma = True
       out += "  "
       out += json.dumps(map_one(line))
   out += "];\n\n"
   out += "export default posts;\n"
   with open("posts.js","w")  as fh:
       fh.write(out)
   return out
