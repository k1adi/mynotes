import { getInitialData } from "./data-notes";

/* eslint-disable valid-typeof */
const STORAGE_NOTES = 'mynotes-kiadi';

const isWebStorageAvailable = () => {
  if (typeof (Storage) === 'undefined') {
    return false;
  }

  return true;
}

const saveLocalData = (notes) => {
  localStorage.setItem(STORAGE_NOTES, JSON.stringify(notes));
}

const checkLocalData = () => {
  if (localStorage.getItem(STORAGE_NOTES) === 'undefined' || localStorage.getItem(STORAGE_NOTES) === null) {
    saveLocalData(getInitialData());
  }
}

const getLocalData = () => {
  let localData = getInitialData();

  if (isWebStorageAvailable) {
    checkLocalData();
    const getLocalData = localStorage.getItem(STORAGE_NOTES);
    localData = JSON.parse(getLocalData);
  }

  return localData;
}

export { getLocalData, saveLocalData }