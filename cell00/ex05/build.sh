if [ -z "$1" ]; then 
   echo "No argument supplied"
fi
for i in "$@"; do
  mkdir ex$i
done
