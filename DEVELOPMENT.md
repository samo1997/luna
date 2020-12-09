# Production 
https://luna-scorpio.propulsion-learn.ch/

# Guide for local development
1. Checkout new local development branch <code>$ git checkout -b development (delete local one first $ git branch -d name)</code>
2. Pull latest development branch from gitlab <code>$ git pull origin development</code>
3. If you have unmerged changes merge them into your local development branch from your previous branch
* <code>$ git merge your-branch-to-integrate</code>
* Resolve conflicts locally
* commit merge (to save and quit the command line commit editor "vim" <code>$ :wq</code>)
4. Create your new branch <code>$ git checkout -b your-branch-name</code> (e.g., branch name: create-login, connect-serializer, ...)
5. Start remote interpreter (Docker containers) with the configured PyCharm command <code>runserver</code>
6. Start frontend react app <code>$ npm start</code>
7. Happy Hacking!
8. Add, commit and push your local branch <code>$ git add . $ git commit -m "message" $ git push origin your-branch-name</code>
9. Create a merge request to the remote <strong>development</strong> branch on gitlab

# Troubleshoot and manipulate running server
* Go into the running container: <code>$ docker exec -ti container_id bash</code> (<code>docker ps</code> for id)
* <code>makemigrations, migrate and runserver</code> with <code>$ python manage.py your_command</code>
* Delete records or drop local DB if needed 

# 1 Week Sprint October 2020
1. Day deploy / db design pony
2. Day sign in / sign up (skip if not completed by 2day)
3. Day new post / restaurant
4. Day profile (still pending)
5. Day presentation / deployed / testing
