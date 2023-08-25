import {
	Table,
	Column,
	Model,
	DataType,
	ForeignKey,
} from "sequelize-typescript";
import { Seller } from "./Seller.js";
import { Receipt } from "./Receipt.js";

@Table({
	tableName: "history",
	timestamps: true,
})
export class History extends Model {
	@Column({
        primaryKey: true,
		type: DataType.SMALLINT,
        autoIncrement: true
	})
    id!: number;

	@ForeignKey(() => Seller)
	@Column({
		allowNull: false,
	})
	sellerId!: number;

	@ForeignKey(() => Receipt)
	@Column({
		allowNull: false,
	})
	receiptId!: number;
}
