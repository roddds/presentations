mv public ..
cd ..
gck gh-pages
mv public jscodeshift
commit "Update build"
push
gck master
rm -rf jscodeshift