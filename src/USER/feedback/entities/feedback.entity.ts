import { userEntity } from 'src/USER/registration/entities/registration.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity("feedback")
export class feedbackEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    feedbackmassage: string;
 @Column()
    feedbackrateing: string;

    @ManyToOne(() => userEntity, (user) => user.feedbacks)
    user: userEntity
}