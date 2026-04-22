mv public ..
cd ..
gck gh-pages
rm -rf jscodeshift
mv public jscodeshift
git add jscodeshift
git commit -m "Update build"
git push origin gh-pages
git checkout master
cd refactoring
