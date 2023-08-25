import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
	tableName: "admins",
	timestamps: false,
})
export class Admin extends Model {         
    @Column({
        primaryKey: true,
        type: DataType.SMALLINT,
    })

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: {
				msg: "Por favor ingresa un correo electrónico válido",
			},
		},
	})
	email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;
}
