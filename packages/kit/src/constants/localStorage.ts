export const LOCAL_STORAGE_PREFIX = '@kit'
export const LOCAL_STORAGE_PREFIX_SETTINGS = 'settings'
export const LOCAL_STORAGE_PREFIX_THEME = 'theme'

export enum LocalStorageKey {
  Settings = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_SETTINGS}`,
  Theme = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_THEME}`
}
