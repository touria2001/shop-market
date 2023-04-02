<template>
  <div class="box">
    <select class="mydropdown">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box select {
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.mydropdown {
  border: none;
  border-bottom: 2px dotted black;
  display: inline; 
  font-weight: 600;
  cursor: pointer;
}
.mydropdown:hover,
.myoption:active,
.myoption:checked {
  border: 2px dotted #da2535;
}
.box select option {
  padding: 30px;
}
</style>