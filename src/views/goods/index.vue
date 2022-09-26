
<template>
  <div>
    <!-- 头部搜索 -->
    <el-form
      :inline="true"
      ref="ResetAll"
      :model="formInline"
      class="demo-form-inline"
    >
      <!-- 商品名称 -->
      <el-form-item prop="cardNum">
        <el-input
          v-model="formInline.cardNum"
          placeholder="商品名称"
        ></el-input>
      </el-form-item>
      <!-- 会员名称 -->
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="商品编号"></el-input>
      </el-form-item>
      <!-- 支付方式 -->
      <el-form-item prop="payType">
        <el-input v-model="formInline.payType" placeholder="选择供应商" @focus="supplier"></el-input>
        
        </p>
      </el-form-item>
<!-- 供应商弹框 -->
<el-dialog title="供应商管理" :visible.sync="supplierAll">
  <!-- input框 -->
  <el-form :model="form">
    <el-form-item label="供应商名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <!-- 供应商表格 -->
  <el-table :data="tableData">
    <el-table-column type="index"  label="序列" width="50"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
      <!-- 查询 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="edit">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="Reset('ResetAll')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column type="index" prop="date" label="序列" width="50">
      </el-table-column>
      <el-table-column prop="cardNum" label="商品名称"> </el-table-column>
      <el-table-column prop="name" label="商品编号" width="80">
      </el-table-column>
      <el-table-column prop="birthday" label="商品规格" width="120">
      </el-table-column>
      <el-table-column prop="phone" label="零售价"> </el-table-column>
      <el-table-column prop="money" label="进货价" width="80">
      </el-table-column>
      <el-table-column prop="integral" label="库存数量" width="100">
      </el-table-column>
      <el-table-column prop="payType" label="供应商">
        <template v-slot="scope">
          {{ scope.row.payType | filterPayType }}
        </template>
      </el-table-column>
    
      <!-- 操作 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 对话框 -->

<el-dialog :title="id==2?'编辑会员':'新增会员'" :visible.sync="dialogFormVisible" width="500px" >
  <el-form :model="dialogFormParams" :rules="rules" ref="ResetAll1">
    <el-form-item label="会员卡号" :label-width="formLabelWidth" prop="cardNum"> 
      <el-input v-model="dialogFormParams.cardNum" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="会员姓名" :label-width="formLabelWidth" prop="name">
      <el-input v-model="dialogFormParams.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="会员生日" :label-width="formLabelWidth" prop="birthday">
      <el-input v-model="dialogFormParams.birthday" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone">
      <el-input v-model="dialogFormParams.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="可用积分" :label-width="formLabelWidth" prop="integral"> 
      <el-input v-model="dialogFormParams.integral" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="支付类型" :label-width="formLabelWidth" prop="payType">
      <el-select v-model="dialogFormParams.payType" placeholder="请选择支付类型">
        <el-option  v-for="(item, index) in payType" :key="index"  :label="item.name" :value="item.id"></el-option>
       
      </el-select>
    </el-form-item>
     <el-form-item label="会员地址" :label-width="formLabelWidth" prop="address">
      <el-input type="textarea" v-model="dialogFormParams.address"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="determine">确 定</el-button>
  </div>
</el-dialog>
    
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MemberApi from "../../api/member";
import MemberEnum from "../../enum/menber";

export default {
  name: "",
  components: {},
  data() {
    return {
      form: {
        name: "",
      },
      // 供应商弹框
      supplierAll: false,
      // 保存弹窗表单的数据
      dialogFormParams: {
        cardNum: "",
        name: "",
        payType: "",
        address: "",
        money: "",
        integral: "",
        phone: "",
        birthday: "",
      },
      // 对话框验证正则
      rules: {
        cardNum: [
          { required: true, message: "请输入会员卡号", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入会员名称", trigger: "blur" }],
        payType: [
          { required: true, message: "请输入支付类型", trigger: "change" },
        ],
      },
      // 对话框标题切换
      id: 1,

      // 对话框宽度
      formLabelWidth: "120px",
      // 对话框的显示隐藏
      dialogFormVisible: false,
      // 页数
      page: 1,
      // 数量
      size: 10,
      // 总数
      total: 0,
      // 头部绑定数据，后台返回固定的数据
      formInline: {
        cardNum: "",
        name: "",
        payType: "",
        birthday: "",
      },
      // 数据类型转换
      payType: MemberEnum.payTapy,
      // 表格數據
      tableData: [],
    };
  },
  filters: {
    filterPayType(value) {
      const data = MemberEnum.payTapy.find((item, index) => {
        // console.log(value,"<=",item.id);
        return item.id == value;
      });
      return data ? data.name : "";
    },
  },
  computed: {},
  created() {
    console.log(MemberApi.getMemberList);
    // 获取会员列表数据
    this.getMemberList();
  },
  // ---------------------------------------------
  methods: {
    // 供应商弹框
    supplier() {
      console.log(111);
      // 显示
      this.supplierAll = true;
    },
    // 对话框确定
    determine() {
      // 获取会员列表数据 新增或者编辑
      this.id == 2 ? this.getMemberList() : this.edit();
      // 对话框关闭
      this.dialogFormVisible = false;
      // 清空对话框内容
      this.Reset("ResetAll1");
    },
    // -----------------------------------------
    //  获取会员列表信息
    async getMemberList() {
      try {
        const { rows, total } = await MemberApi.getMemberList(
          this.page,
          this.size,
          this.formInline
        );
        this.total = total;
        this.tableData = rows;
      } catch (e) {
        console.log(e.message);
      }
    },
    // --------------------------------------------
    // 点击查询方法
    async onSubmit(value) {
      try {
        // 查询接口
        const response = await MemberApi.editMember(this.dialogFormParams);
        this.dialogFormParams = response;
        console.log("submit!");
      } catch (e) {
        console.log(e);
      }
    },
    // --------------------------------------------
    // 新增
    async edit() {
      // 清空对话框内容
      this.Reset("ResetAll1");
      // 对话框标题切换
      this.id = 2;
      if (this.id == 2) {
        // 对话框标题切换
        this.id = 1;
        console.log(this.id);
        try {
          // 对话框显示隐藏
          this.dialogFormVisible = !this.dialogFormVisible;
          console.log("edit");
          // 新增数据 参数是input 框里的数据
          const response = await MemberApi.addMember(this.dialogFormParams);
          // 获取会员列表数据
          this.getMemberList();
        } catch (e) {
          console.log(e.message);
        }
      }
    },
    // --------------------------------------------
    // 重置
    Reset(Reset) {
      try {
        // res定义的数据ResetAll传参
        this.$refs[Reset].resetFields();
        console.log("ResetAll1");
      } catch (e) {
        console.log(e.message);
      }
    },
    // ---------------------------------------------
    // 表格编辑
    async handleEdit(index, row) {
      // 对话框标题切换
      this.id = 1;
      if (this.id == 1) {
        // 对话框标题切换
        this.id = 2;
        console.log(this.id);
        try {
          // 重新input赋值
          this.dialogFormParams = row;
          // 对话框显示隐藏
          this.dialogFormVisible = !this.dialogFormVisible;
          // 编辑接口
          const response = await MemberApi.editMember(row.id, row);
        } catch (e) {
          console.log(e.message);
        }
      }
    },
    // -------------------------------------------------
    // 表格刪除
    handleDelete(index, row) {
      console.log("handleDelete", index, row);
      this.$confirm("你确定要删除这条数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 删除数据
          const response = await MemberApi.deleteMemberList(row.id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          // 删除后会员列表刷新
          this.getMemberList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // -------------------------------------------------
    //  条数
    handleSizeChange(val) {
      this.size = val;
      console.log(`每页 ${val} 条`);
      this.getMemberList();
    },
    // ---------------------------------------------
    // 页码数
    handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
      this.getMemberList();
    },
  },
};
</script>
<style scoped lang='scss'>
.p {
  border: 1px solid rgba(185, 173, 173, 0.671);
  border-radius: 5px;
}
</style>
