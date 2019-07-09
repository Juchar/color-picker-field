# This script pushes a demo-friendly version of your element and its
# dependencies to gh-pages.

# usage gp Polymer core-item [branch]
# Run in a clean directory passing in a GitHub org and repo name

GH_REF="github.com/${TRAVIS_REPO_SLUG}"

org=`echo ${TRAVIS_REPO_SLUG} | cut -f 1 -d /`
repo=`echo ${TRAVIS_REPO_SLUG} | cut -f 2 -d /`

name="Travis CI"
email="Juchar@Github.com"
branch=${3:-"master"} # default to master when branch isn't specified

mkdir temp && cd temp

# make folder (same as input, no checking!)
mkdir $repo
git clone "https://${GITHUB_TOKEN}@${GH_REF}" --single-branch

# switch to gh-pages branch
pushd $repo >/dev/null
git checkout --orphan gh-pages

# remove all content
git rm -rf -q .

# use bower to install runtime deployment
bower cache clean $repo # ensure we're getting the latest from the desired branch.
git show ${branch}:bower.json > bower.json
echo "{
  \"directory\": \"components\"
}
" > .bowerrc
bower install
bower install $org/$repo#$branch
git checkout ${branch} -- demo
rm -rf components/$repo/demo
mv demo components/$repo/

# redirect by default to the component folder
echo "<META http-equiv="refresh" content=\"0;URL=components/$repo/demo\">" >index.html

git config user.name $name
git config user.email $email

# send it all to github
git add -A .
git commit -am 'Deploy to GitHub Pages'
git push --force --quiet -u "https://${GITHUB_TOKEN}@${GH_REF}" gh-pages > /dev/null 2>&1

popd >/dev/null
