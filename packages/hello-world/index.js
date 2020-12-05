import HelloWorld from './src/index.vue';

HelloWorld.install = (app) => {
  app.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
