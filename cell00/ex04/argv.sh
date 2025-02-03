if [ -z "$1" ]; then
  echo "No argument supplied"
else
  for arg in "$@"; do
     echo "$arg"
  done
fi
