// docs/data/cars.data.ts
import fs from "node:fs";
import { csvParse } from "file:///Users/tonysun/Documents/Research/git/zephyrhealthcare.github.io/node_modules/d3/src/index.js";
var cars_data_default = {
  watch: ["../public/data/cars.csv"],
  load([file]) {
    return csvParse(fs.readFileSync(file, "utf-8"));
  }
};
export {
  cars_data_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy9kYXRhL2NhcnMuZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90b255c3VuL0RvY3VtZW50cy9SZXNlYXJjaC9naXQvemVwaHlyaGVhbHRoY2FyZS5naXRodWIuaW8vZG9jcy9kYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdG9ueXN1bi9Eb2N1bWVudHMvUmVzZWFyY2gvZ2l0L3plcGh5cmhlYWx0aGNhcmUuZ2l0aHViLmlvL2RvY3MvZGF0YS9jYXJzLmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3RvbnlzdW4vRG9jdW1lbnRzL1Jlc2VhcmNoL2dpdC96ZXBoeXJoZWFsdGhjYXJlLmdpdGh1Yi5pby9kb2NzL2RhdGEvY2Fycy5kYXRhLnRzXCI7aW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQge2NzdlBhcnNlfSBmcm9tIFwiZDNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB3YXRjaDogW1wiLi4vcHVibGljL2RhdGEvY2Fycy5jc3ZcIl0sXG4gIGxvYWQoW2ZpbGVdKSB7XG4gICAgcmV0dXJuIGNzdlBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlLCBcInV0Zi04XCIpKTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksT0FBTyxRQUFRO0FBQzNaLFNBQVEsZ0JBQWU7QUFFdkIsSUFBTyxvQkFBUTtBQUFBLEVBQ2IsT0FBTyxDQUFDLHlCQUF5QjtBQUFBLEVBQ2pDLEtBQUssQ0FBQyxJQUFJLEdBQUc7QUFDWCxXQUFPLFNBQVMsR0FBRyxhQUFhLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDaEQ7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
