import localforage from 'localforage';

const postData = (dbName: string, dbValue: any) => {
  localforage.setItem(dbName, dbValue).then(function (value) {
    // This will output `1`.
    console.log('lf: ', value[0]);
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
  });
}

const getData = (dbName: string) => {
  return localforage.getItem(dbName).then(function (value) {
    // This code runs once the value has been loaded
    // from the offline store.
    console.log(value);
    return value;
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
  });
}

const removeData = (dbName: string) => {
  localforage.removeItem(dbName).then(function () {
    // Run this code once the key has been removed.
    console.log('Key is cleared!');
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
  });
}

const clearDB = () => {
  localforage.clear().then(function () {
    // Run this code once the database has been entirely deleted.
    console.log('Database is now empty.');
  }).catch(function (err) {
    // This code runs if there were any errors
    console.log(err);
  });
}

export {
  clearDB,
  getData,
  postData,
  removeData
}
