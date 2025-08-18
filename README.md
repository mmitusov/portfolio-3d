Библиотеки:  
npm i @react-three/fiber  
npm i @react-three/drei  
npm i three  
npm i maath  
npm i react-tilt  
npm i react-vertical-timeline-component  
npm i @types/react-vertical-timeline-component  
npm i framer-motion  
npm i sass  
npm i nodemailer  
npm i --save-dev @types/nodemailer  
@reduxjs/toolkit  
react-redux 

# Main app description
Сперва почистим проэкт. Удалим вся лишенее из стартовой страницы 'page.tsx'. Далее разделим все файлы, что были сваленны в одну кучу в папке 'app', по разным папкам, каждая из которых будет отвечать за свой функционал. Глобальные стили переместим в созданую нами папку 'styles'. А favicon.ico переместим в глобальную папку 'public'. Мы можем хранить favicon.ico как папке '/public', так и в корне папки '/app'. И так, и так - Next сможет считывать нашу картинку. И создадим папку 'components', где будем хранить все компоненты.

Напомню, что сама папка 'app' будет отвечать за роутинт (хранить все основные страницы нашего приложения), а также за лейаут, который будет отображаться на каждой из этих страниц. Все лишниее для чистоты проэекта из этой папки лучше убрать. Если мы хотим создать новый роут, то нам просто нужно создать папку внутри 'app' и дать ей имя. Ее имя и будет названием роута. А внутри созданой папки создать файл 'page.tsx'.

После чего мы начнем устанавливать нужные нам библиотеки. У нас не будет уставревших библиотек. Но если бы такая и имелась бы, то мы устанавливали ее бы с флагом --legacy-peer-deps: "npm install --legacy-peer-deps <lib_name>".

Приступим к верстке. Начнем с того, что мы создадим скелет нашего приложения. Сперва создадим пустые заготовки всех компонентов. Затем батчем (разом) импортируем все компоненты на нашу стартовую страницу. Чтобы импортировать все за раз, можно воспользоваться 2-мя методами. 
1. Воспользоваться синтаксисом `import { Navbar, About, etc... } from '@/components'`. Для этого сперва нужно создать в корне папки "components" файл "index.ts", в который мы добавим экспорт всех компонентов что мы хотим импортировать. Без наличия такого index.ts файла, синтаксис выше не сработает.
```
import Navbar from "./Navbar";
import About from "./About";
export { Navbar, About };
```
2. Воспользоваться более новым синтаксисом. Однако он может не работать в более старых проэктах. При таком импорте "index.ts" файл не нужен.
```
import * as Components from '@/components';
const { Navbar, About, etc.. } = Components;
```
3. P.S. Ну или же импортировать каждый компонент по одиночке отдельно, а не батчем.  

### Навбара и "Hero" секция 
Далее создадим хедер который будет состоять из навбара и "Hero" секции с 3D моделью компьютера. В навбар, помимо прочего добави еще наше лого и бургер меню под мобилку. Первая 3D модель с которой мы будем работать будет располагаться в компоненте `Computers.jsx`. Основные заметки по работе с ThreeJS бдут располагаться там. В зависимости от размере экрана мы будем менять размер отображаемой модельки (адаптив).

### "About" секция 
Следующая на очереди - секция "About". Тут отображаем анимированные карточки и текст. Обернем контент этой секции в "framer-motion", чтобы проанимировать его. Заглавные параметры "framer-motion" будем хранить в `SectionWrapper.tsx`. Онтвыступает в роли HOC (Higher Order Component). А затем оборачивать им все последующие секции/компоненты. Помимо HOC, "SectionWrapper" также будет применять и стили. 

### "Experience" секция 
Следующая на очереди - секция "Experience". Сдесь, при воспользуемся готовой UI библиотекой для отображения хронологии рабочего опыта. Чтобы анимация библиотеки отрабатывала только когда она во вьюшке, то создадим кастомный хук "useIsInView.tsx", чтобы отслеживать состояние этого компонента.

Также воспользуемся `@apply w-full !important;` чтобы переписать стили самой библиотеки. Но мы добавим эти стили в `utilityClasses.module.scss`, так как Tailwind не поддерживает применение таких стилей напрямую. Таким образом при помощи "!important" мы перезапишем изначально инкапсулированные стили в 3rd party библиотеке, на нужные нам.

### "Tech" секция 
Следующая на очереди - секция "Tech". Сдесь отобразим 3D шарики с картинками технологий. Важно заметить, что "useTexture" принимает пареметром только путь к картике в виде строки. А Next.js по дефолту импортирует картинки как объект. Но один из параметров этого объекта - это нужный нам путь к картике. А точнее - `icon.src`. Им и воспользовались.

We can't Display all technologies/balls at once. This is a common problem when dealing with multiple WebGL contexts in Three.js, especially when rendering many 3D objects simultaneously. The error occurs because browsers have a limited number of WebGL contexts they can maintain at once.

### "Feedback" секция 
Следующая на очереди - секция "Feedback". Для карточек с фидбеком применим отрецательную маржу `-mt-20`. Таким образом контейнер с карточками залезет на соседний контейнер и создаст эффект будто два елемента накладываются друг на друга.

### "Contact" секция 
Следующая на очереди - секция "Contact". Вместо того чтобы создавать стейт под каждый инпут, мы будем хранить инфу в одном стейте, в виде объекта. Где имя секции и ее инпут мы будем брать из ивента и сохранять все как ключ-пару. 

Разберем сам момент сохранения иразницу между `[name]: value` и `name: value`
```
const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});
setContactForm(prev => ({ ...prev, [name]: value }));  // This dynamically sets the key based on the variable `name`
```
- `[name]: value` This syntax allows you to dynamically set a property on the object using the value of the name variable (it dynamically checks if the key already exists in the object). If the name already exists as a key in the object, it updates the value. If it doesn't exist, it adds a new key-value pair. P.S. If you need to generate the key name dynamically based on a variable or some condition, using bracket notation ([key]: value) is the way to go.
- `name: value` This syntax always creates a key named "name" (a literal string key), regardless of whether it's adding a new key or updating an existing one. This is not dynamic and does not use the value of the name variable.
So, to dynamically set a key based on a variable: Use `[name]: value`. To set a key named "name": Use `name: value`.

Также, чтобы не использовать сторонние облачные решения для отправки имейла, создадим свое собственное решение. Логика по отправке имейла, может быть реализована только на бекенде. Хорошо что Next.js дает нам реализовать бекенд и настроить API. Поэтому создадим логику по отправке сообщений в "app -> api -> email".

Папку можно назвать как угодно, главное чтобы она находилсять в `app` дирректории, таким образом ее название будет частью URL. Но хорошей практикой является называть next js api роуты как - "api". В nodemailer мы должны передать не пароль от нашей почты, а сгенерированный при помощи ["App Password for your Gmail account"](https://myaccount.google.com/apppasswords).

# Adding features
### Redux with SSR in mind
To save some Readme space all notes about handy tricks and setup process would be described in the `store.ts` file.

### Let to download my CV
Added download button in Contact.tsx component

### How to publish Next.js to GitHub Pages
GitHub Pages does not support Next.js directly. When deploying a Next.js app to GitHub Pages, we nned to publish only the build output because GitHub Pages can serve only a static content (HTML, CSS, JS, and assets). It doesn’t support server-side functionality like APIs or SSR. Therefore, your app needs to be converted to static HTML files, making it a static site rather than a dynamic one. But this way we alos loose all SSR and API functionality.

Steps to Prepare a Next.js App for Publishing on GitHub Pages:  
1. Configure Next.js for Static Export. In your next.config.js, ensure you're using the output: 'export' option to export the app as static files.
```
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Since GitHub Pages doesn’t support Next.js image optimization
  },
};
export default nextConfig;
```
2. GitHub Pages often hosts websites at paths like `/your-repo-name`. That's why after publishing path to some files might be broken and cause issues. To handle this, set the basePath in `next.config.js`. But in our case we don't need this.
3. Note that `next.config.js basePath` controls Next.js routing for pages and APIs. Static files in the `public` folder, like images or PDFs, are not automatically prefixed by the `basePath` setting. They are served from the root of the domain (e.g., /resume_pdf/file.pdf) regardless of the basePath config. Thus, we need manually adjust the paths in our component for such cases like:
```
const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GIT_HUB_PAGES_BASE_PATH : '';
const earth = useGLTF(`${basePath}/planet/scene.gltf`);
```  
P.S. `../public/planet/scene.gltf` won’t work because you can't directly reference the public folder in Next.js like that. But when you create an `index.js` file inside the `public` folder of your Next.js app, you effectively turn that file into a module that can be imported from other parts of your application like `../../public/media`. While this approach may work, it's not the conventional way of using the `public` directory in Next.js. And importing a large number of files through an index file can lead to larger bundle sizes, especially if you end up importing more files than needed. Typically, in Next.js you access assets directly via URLs (e.g., /media/logo.png).

⚠️ Notes about Next.js 15

Starting from **Next.js 15**, the framework became more strict about **static exports (`output: 'export'`)**.

- API routes and SSR features (`getServerSideProps`, server actions, etc.) are **not allowed** in static export mode.
- If an API route exists (e.g., `/app/api/...`) but is not configured with `dynamic = "force-static"` or `revalidate`, the build will fail.
- This makes hosting on platforms like **GitHub Pages** (which only support static files) trickier compared to earlier Next.js versions.

**Our approach for this project:**

Since we don’t need server functionality right now, we:

1. Disabled API calls in the client code by commenting out `fetch('/api/...')` in the form handler.
2. Kept the API folder for future use, but avoided calling it when building statically.
3. Console out `handleSubmit` in Contact.tsxvfor now
3. This way, the project builds cleanly with `output: 'export'` and can be deployed to GitHub Pages without errors.

ДОБАВИТЬ МУЛЬТИЯЗЫЧНОСТЬ

ОПТИМИЗИРОВАТЬ SSR

# Debuging section
1. 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values' warning is appeared because following function generates NaN time to time:  
`const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));`

Fix:
I've modified the code to use 5001 points instead of 5000. Here's why this fixes the issue:
Each point in 3D space requires 3 values (x, y, z)
The original value of 5000 divided by 3 gives 1666.66... (not a whole number). It expects the positions array to have a length that's divisible by 3.
This meant the last point was incomplete, causing NaN values
By using 5001, we ensure we have complete sets of x, y, z coordinates (5001 ÷ 3 = 1667 complete points)
This have resolved the warning about NaN values.


2. The cause of the "Warning: Extra attributes from the server: style at html" is the of the following packege:  
```
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
```

3. basePath and cashing
