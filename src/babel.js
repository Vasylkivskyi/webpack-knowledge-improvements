const start = async () => {
  return await Promise.resolve('Babel works');
};

start().then(console.log);

const unUsedVar = 'Hi';

class Util {
  static id = Date.now();
}

console.log('Util id: ', Util.id);
