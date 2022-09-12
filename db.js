const { Sequelize,DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize("expressmysql", 'Mohammed', 'Qwer123456', {
    host: "mysql-87952-0.cloudclusters.net",
    port:11067,
    dialect:'mysql'
  });

  async function connectdb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }


  }

  connectdb();


  
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    
    },
    password:{
        type: DataTypes.STRING,

    },
   
  }, {
    timestamps: false

  }
  );

  //methods

  const  insertIntoDb=async(data)=>{

    try {
            // Create a new user

            // MAke this dynamic
            const jane = await User.create({ name: data.name, email: data.email,password:data.password});
            console.log("Jane's auto-generated ID:", jane.id);
return jane.id;

        
    } catch (error) {
        //return error;
        throw new Error(error);
    }


  }


    const  updateData=async(data)=>{

        try {
                // Create a new user

                // MAke this dynamic
        const users=      await User.update({ name: data.name }, {
                where: {
                    id: data.id
                }
                });
    return users;
            
        } catch (error) {
            //return error;
            throw new Error(error);
        }


    }


  


    const  deleteData=async(data)=>{

      try {
              // Create a new user
  
              // MAke this dynamic
        const users=      await User.destroy({
          where: {
            id:data
          }
        });
return users;
          
      } catch (error) {
          //return error;
          throw new Error(error);
      }
  
  
    }




  module.exports={
    insertIntoDb,
    updateData,
  
    deleteData

  }