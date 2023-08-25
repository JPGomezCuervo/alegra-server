import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
	tableName: "sellers",
	timestamps: false,
})
export class Seller extends Model {
	@Column({
        primaryKey: true,
		type: DataType.INTEGER,
        unique: true
	})
    id!: number;

	@Column({
		type: DataType.STRING(50),
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.SMALLINT,
		allowNull: false,
	})
	victories!: string;

	@Column({
		type: DataType.SMALLINT,
		allowNull: false,
	})
	points!: string;

	@Column({
		type: DataType.SMALLINT,
		allowNull: false,
	})
	currentPoints!: string;
}
