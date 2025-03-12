<template>
    <DataTable :value="dataExample">
        <Column field="id" header="ID">
            <template #body="{ data }">
                <div>
                    {{ data.id }}
                </div>
            </template>
        </Column>
        <Column field="name" header="Name">
            <template #body="{ data }">
                <div>
                    {{ data.name }}
                </div>
            </template>
        </Column>
        <Column field="role" header="Role">
            <template #body="{ data }">
                <div>
                    {{ data.role }}
                </div>
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const dataExample = [
    { id: 1, name: "qq", parent: "qq", role: "зав.кафедры" },
    { id: 2, name: "qq1", parent: "qq1", role: "зав.кафедры" },
    { id: 3, name: "qq2", parent: "qq2", role: "зав.кафедры" },
    { id: 4, name: "qq3", parent: "qq3", role: "зав.кафедры" },
    { id: 5, name: "qq4", parent: "qq4", role: "зав.кафедры" },
];
</script>
