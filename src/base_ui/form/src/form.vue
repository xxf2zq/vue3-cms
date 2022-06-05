<template>
  <div class="base_form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="laberWidth" :rules="rules">
      <el-row :gutter="20" v-show="!ishidepassword">
        <el-col v-for="item in formitems" :key="item" v-bind="colLayout">
          <el-form-item :label="item.label" :style="itemstyle" :prop="item.field + ''">
            <template v-if="item.type === 'text'">
              <el-input
                v-model="formdata[`${item.field}`]"
                :placeholder="item.placeholder"
                v-bind="item.otheroptions"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'password'">
              <el-input
                show-password
                v-model="formdata[`${item.field}`]"
                :placeholder="item.placeholder"
                type="password"
                v-bind="item.otheroptions"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="formdata[`${item.field}`]" :placeholder="item.placeholder" style="width: 100%">
                <el-option :label="hobby.label" :value="hobby.value" v-for="hobby in item.options" :key="hobby" />
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-model="formdata[`${item.field}`]" v-bind="item.otheroptions" />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-show="ishidepassword">
        <el-col v-for="item in formitems" :key="item" v-bind="colLayout">
          <el-form-item :label="item.label" :style="itemstyle" :prop="formdata[`${item.field}`]">
            <template v-if="item.type === 'text'">
              <el-input
                v-model="formdata[`${item.field}`]"
                :placeholder="item.placeholder"
                v-bind="item.otheroptions"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'password'">
              <el-input
                disabled
                v-model="formdata[`${item.field}`]"
                :placeholder="item.placeholder"
                type="password"
                v-bind="item.otheroptions"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="formdata[`${item.field}`]" :placeholder="item.placeholder" style="width: 100%">
                <el-option :label="hobby.label" :value="hobby.value" v-for="hobby in item.options" :key="hobby" />
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-model="formdata[`${item.field}`]" v-bind="item.otheroptions" />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, watch, inject, ref, getCurrentInstance } from 'vue'
import { IFormItem } from '../types/index'
import { ElForm, ElMessage } from 'element-plus'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formitems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {}
    },
    laberWidth: {
      type: String,
      default: '80px'
    },
    itemstyle: {
      type: Object,
      default: () => ({ padding: '0px 10px' })
    },
    colLayout: {
      type: Object,
      default: () => ({ xs: 24, sm: 24, md: 12, lg: 8, xl: 6 })
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, _) {
    const formdata = computed(() => props.modelValue)
    const formref = ref<InstanceType<typeof ElForm>>()
    const { appContext } = getCurrentInstance()!
    const ishidepassword = inject('ishidepassword')
    watch(
      formdata,
      (newval) => {
        _.emit('update:modelValue', newval)
      },
      {
        deep: true
      }
    )
    const validfrom = async (formEl: any) => {
      if (!formEl) return
      await formEl.validate((valid: Boolean) => {
        if (valid) {
          return true
        } else {
          ElMessage({ type: 'error', message: '请按要求填写' }, appContext)
          return false
        }
      })
    }
    return {
      formdata,
      ishidepassword,
      formref,
      validfrom
    }
  }
})
</script>

<style lang="less" scoped></style>
