<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="users-list">
    <vs-table :data="users" search strip pagination max-items="5">
      <template #thead>
        <vs-th sort-key="userId"> # </vs-th>

        <vs-th> Name </vs-th>

        <vs-th> Email </vs-th>

        <vs-th> Age </vs-th>

        <vs-th> Company </vs-th>

        <vs-th> Phone </vs-th>

        <vs-th> Address </vs-th>

        <vs-th> Actions </vs-th>
      </template>

      <template v-slot:default="dataTable">
        <vs-tr v-for="(tr, index) in dataTable.data" :key="index">
          <vs-td :data="dataTable?.data[index]?.id">
            {{ dataTable?.data[index]?.id }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.name">
            {{ dataTable?.data[index]?.name }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.email">
            {{ dataTable?.data[index]?.email }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.age">
            {{ dataTable?.data[index]?.age }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.company">
            {{ dataTable?.data[index]?.company }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.phone">
            {{ dataTable?.data[index]?.phone }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.address">
            {{ dataTable?.data[index]?.address }}
          </vs-td>

          <vs-td :data="dataTable?.data[index]?.id">
            <vs-button
              color="primary"
              type="filled"
              icon="remove_red_eye"
              size="small"
              @click.native="
                changeRoute('view-user', dataTable?.data[index]?.id)
              "
            />
            <vs-button
              color="success"
              type="filled"
              icon="edit"
              size="small"
              @click.native="
                changeRoute('update-user', dataTable?.data[index]?.id)
              "
            />

            <vs-button
              color="danger"
              type="filled"
              icon="delete"
              size="small"
              @click.native="$emit('delete', dataTable?.data[index]?.id)"
            />
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import ChangeRoute from '@/mixins/change-route';

export default {
  name: 'UsersListTable',

  mixins: [ChangeRoute],

  computed: {
    users() {
      return this.$store.getters.getUsersList;
    },
  },
};
</script>

<style scoped lang="scss"></style>
