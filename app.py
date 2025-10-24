import os # <-- ¡Añade esto al inicio del archivo!
from flask import Flask, jsonify, request, abort
from flask_cors import CORS # Importamos para solucionar el error de seguridad CORS
import mysql.connector
from mysql.connector import Error

# -----------------------------------------------------
# 1. CONFIGURACIÓN DE LA BASE DE DATOS
# -----------------------------------------------------

config_db = {
    'host': os.environ.get('MYSQL_HOST'),      # Lee la variable de Railway
    'user': os.environ.get('MYSQL_USER'),      # Lee la variable de Railway
    'password': os.environ.get('MYSQL_PASSWORD'), # Lee la variable de Railway
    'database': os.environ.get('MYSQL_DATABASE') # Lee la variable de Railway
}

# 2. INICIALIZACIÓN DEL SERVIDOR
app = Flask(__name__)
CORS(app) # Habilitamos CORS para que 'hola.test' pueda hablar con el puerto 5000

# -----------------------------------------------------
# 3. RUTA PARA GUARDAR DATOS (MÉTODO POST)
# -----------------------------------------------------
@app.route('/api/employees', methods=['POST'])
def crear_empleado():
    print("¡ALGUIEN ESTÁ INTENTANDO GUARDAR UN NUEVO EMPLEADO!")
    
    # 1. Recibe los datos que envió el JavaScript
    data = request.json
    
    # 2. Revisa que los campos existan (como en tu tabla de HeidiSQL)
    nombre = data.get('nombre')
    email = data.get('email')
    mensaje = data.get('mensaje') # Asumo que usarás el campo 'mensaje'
    
    if not nombre or not email or not mensaje:
        return jsonify({"error": "Faltan campos (nombre, email, o mensaje)."}), 400

    conn = None
    cursor = None
    try:
        conn = mysql.connector.connect(**config_db)
        cursor = conn.cursor()
        
        # 3. Consulta SQL para INSERTAR
        sql = "INSERT INTO employees (nombre, email, mensaje) VALUES (%s, %s, %s)"
        valores = (nombre, email, mensaje)
        
        cursor.execute(sql, valores)
        conn.commit() # ¡CONFIRMA EL CAMBIO EN LA BASE DE DATOS!

        # 4. Devuelve un mensaje de éxito
        return jsonify({"mensaje": "¡Datos guardados con éxito!", "id": cursor.lastrowid}), 201

    except Error as e:
        print(f"ERROR al insertar: {e}")
        return jsonify({"error": f"Error de base de datos al guardar: {e}"}), 500

    finally:
        if cursor: cursor.close()
        if conn: conn.close()
        print("Conexión de escritura cerrada.")


# -----------------------------------------------------
# 4. RUTA PARA LEER DATOS (MÉTODO GET) - (La que ya tenías)
# -----------------------------------------------------
@app.route('/api/employees', methods=['GET'])
def obtener_empleados():
    print("¡ALGUIEN ESTÁ PIDIENDO LOS EMPLOYEES!")
    
    conn = None 
    cursor = None 
    
    try:
        conn = mysql.connector.connect(**config_db)
        cursor = conn.cursor(dictionary=True) 
        
        # Consulta SQL para SELECCIONAR
        cursor.execute("SELECT nombre, email, mensaje FROM employees")
        data = cursor.fetchall()
        
        return jsonify(data)

    except Error as e:
        print(f"ERROR al leer: {e}")
        abort(500, description=f"Error de base de datos: {e}")

    finally:
        if cursor: cursor.close()
        if conn: conn.close()
        print("Conexión de lectura cerrada.")

# -----------------------------------------------------
# 5. INICIAR EL SERVIDOR (Siempre al final)
# -----------------------------------------------------
if __name__ == '__main__':
    # El puerto 5000 es el que usamos para que no choque con Apache
    app.run(port=5000, debug=True)

    #soy un dios maje