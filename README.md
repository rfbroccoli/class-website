# steps

1. initialize a svelte app with
   `npm init svelte@next my-app`

2. install tailwindcss

        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init tailwind.config.cjs -p
        mv postcss.config.js postcss.config.cjs

3. follow the remaining steps [here](https://tailwindcss.com/docs/guides/sveltekit)

4. install `daisyui` and `theme-change` with
   `npm i -D daisyui theme-change`

5. add `daisyui` in `tailwind.config.cjs` like [this](https://github.com/rfbroccoli/class-website/blob/part1/tailwind.config.cjs)

        module.exports = {
        content: ['./src/**/*.{html,js,svelte,ts}'],
        theme: {
            extend: {},
        },
        plugins: [require("daisyui")],
        }



6. add this in `script` tag in `src/routes/__layout.svelte` like [this](https://github.com/rfbroccoli/class-website/blob/part1/src/routes/__layout.svelte)

        import { onMount } from 'svelte';
        import { themeChange } from 'theme-change';

        // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
        onMount(() => {
            themeChange(false);
            // 👆 false parameter is required for svelte
        });

7. install `mongodb` with `npm i -D mongodb`

8. create a `.env` file and add this to test with the test database

        VITE_MONGODB_URL=mongodb+srv://pwhb:g61SYqMXcShSMvs4@cluster0.v2xda.mongodb.net/test


9. follow the steps in the video. here's the only two steps that's not in a `.svelte` file
    - create `lib/server/db.js` like [this](https://github.com/rfbroccoli/class-website/blob/part1/src/lib/server/db.js)

    - create an `api/students` endpoint like [this](https://github.com/rfbroccoli/class-website/blob/part1/src/routes/api/students.js)

