import { makeAutoObservable } from "mobx";
import { Brand } from "src/shared/types/brand";
import { Device } from "src/shared/types/device";
import { Type } from "src/shared/types/type";
import { fetchBrands } from "src/shared/api/brand/fetch-brands";
import { fetchTypes } from "src/shared/api/type/fetch-types";
import { fetchDevice } from "src/shared/api/device/fetch-device";

export default class DeviceStore {
  _types: Type[];
  _brands: Brand[];
  _devices: Device[];
  _selectedType: Type | null;
  _selectedBrand: Brand | null;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    makeAutoObservable(this);
  }

  setTypes(types: Type[]) {
    this._types = types;
  }
  setBrands(brands: Brand[]) {
    this._brands = brands;
  }
  setDevices(devices: Device[]) {
    this._devices = devices;
  }

  async fetchTypes() {
    const types = await fetchTypes();
    this.setTypes(types);
  }

  async fetchBrands() {
    const brands = await fetchBrands();
    this.setBrands(brands);
  }

  async fetchDevice() {
    const deviceList = await fetchDevice();
    this.setDevices(deviceList.rows);
  }

  setSelectedType(type: Type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand: Brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
