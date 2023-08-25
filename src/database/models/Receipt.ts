import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
	tableName: "receipts",
	timestamps: false,
})
export class Receipt extends Model {
	@Column({
        primaryKey: true,
		type: DataType.SMALLINT,
        autoIncrement: true
	})
    id!: number;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	link!: string;
}
