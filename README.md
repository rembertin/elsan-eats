# Elsan Eats
## Install
Copy the root .env file:
```bash
cp .env.example .env
```
You may need to edit the USER_ID and GROUP_ID with your system user ID and group.

Start your containers:
```bash
docker compose up -d
```

### Configure API
Move to the `api` directory, and create the .env file:
```bash
cd ./api
cp .env.example .env
```

`source` the utils file `functions.sh`:
```bash

# Now you have access to multiple commands: `artisan`, `composer`, etc.
```

Generate the Laravel APP_KEY and seed database:
```bash
source functions.sh # more info on this in next section
artisan key:generate
artisan db:seed
```

## Access your app
In your favorite web browser, go to [http://localhost:5173](http://localhost:5173). You should be ready to go!

## Run commands
### Frontend
If you need to install a new package or run shadcn, go to the front directory and `source` the utils file `functions.sh`:
```bash
cd ./front
source functions.sh
```

Now you can run the following commands:
```bash
npm install -D my-genuine-dependency
npx shadcn@latest add freaking-component
```

### Backend
Same, if you need to run artisan command or install a composer package, go to the api directory and `source` the utils file `functions.sh`:
```bash
cd ./api
source functions.sh
```

Now you can run the following commands:
```bash
composer require foo/bar
artisan foo:bar
```
