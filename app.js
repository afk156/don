import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(''); 
  const [name, setName] = useState('');
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const userData = {
    name: name || 'Ұлан Оспанов',
    phone: phone || '+7 (777) 123-45-67',
    email: 'ulan.ospanov@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    role: 'Премиум Пользователь',
    documents: [
      { id: '1', title: 'Удостоверение личности', status: 'Проверено', icon: '🪪' },
      { id: '2', title: 'Водительское удостоверение', status: 'Проверено', icon: '🚗' },
      { id: '3', title: 'Договор обслуживания', status: 'Активен', icon: '📄' },
    ],
    devices: [
      { id: '1', name: 'iPhone 15 Pro (Текущее)', status: 'В сети' },
      { id: '2', name: 'MacBook Pro 16"', status: 'Был в сети 2 часа назад' },
    ]
  };

  const handleLogin = () => {
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        
        {currentScreen === 'login' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => {}}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Привет, с возвращением!</Text>
              <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>📞</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Номер телефона"
                  placeholderTextColor="#9ca3af"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️‍🗨️' : '👁️'}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.forgotContainer} onPress={() => setCurrentScreen('forgot')}>
                <Text style={styles.purpleText}>Забыли пароль?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
                <Text style={styles.mainButtonText}>Войти</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
              <Text style={styles.grayText}>У вас нет аккаунта? </Text>
              <TouchableOpacity onPress={() => setCurrentScreen('register')}>
                <Text style={styles.purpleText}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {currentScreen === 'register' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('login')}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Регистрация</Text>
              <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить!</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>👤</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Ваше имя" 
                  placeholderTextColor="#9ca3af" 
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>📞</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Номер телефона" 
                  placeholderTextColor="#9ca3af" 
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Пароль" 
                  placeholderTextColor="#9ca3af" 
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️‍🗨️' : '👁️'}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.checkboxRow} 
                onPress={() => setAcceptedTerms(!acceptedTerms)}
              >
                <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                  {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.termsText}>
                  Создавая учетную запись, вы соглашаетесь с нашими условиями использования
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
                <Text style={styles.mainButtonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
              <Text style={styles.grayText}>Уже есть аккаунт? </Text>
              <TouchableOpacity onPress={() => setCurrentScreen('login')}>
                <Text style={styles.purpleText}>Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {currentScreen === 'forgot' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('login')}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Восстановление пароля</Text>
              <Text style={styles.subtitle}>Введите свой номер телефона, чтобы восстановить пароль</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>📞</Text>
                <TextInput 
                  style={[styles.input, { color: '#9333ea', fontWeight: '600' }]}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="+7 (___) ___-__-__"
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <TouchableOpacity style={styles.mainButton} onPress={() => setCurrentScreen('verify')}>
                <Text style={styles.mainButtonText}>Продолжить</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
        )}

        {currentScreen === 'verify' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('forgot')}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Подтвердить номер</Text>
              <Text style={styles.subtitle}>
                Мы только что отправили код на{"\n"}
                <Text style={{ fontWeight: '600', color: '#374151' }}>{phone || '+7 (777) 123-45-67'}</Text>
              </Text>

              <View style={styles.codeContainer}>
                <TextInput 
                  style={styles.hiddenInput}
                  value={code}
                  onChangeText={(text) => {
                    if (/^\d{0,4}$/.test(text)) setCode(text);
                  }}
                  keyboardType="number-pad"
                  maxLength={4}
                  autoFocus={true}
                />

                {[0, 1, 2, 3].map((index) => {
                  const digit = code[index] || '';
                  return (
                    <View key={index} style={[styles.codeBox, digit ? styles.codeBoxFilled : null]}>
                      <Text style={styles.codeText}>{digit}</Text>
                    </View>
                  );
                })}
              </View>

              <TouchableOpacity 
                style={[styles.mainButton, code.length < 4 && { opacity: 0.5 }]} 
                disabled={code.length < 4}
                onPress={() => setCurrentScreen('reset')}
              >
                <Text style={styles.mainButtonText}>Продолжить</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => {}}>
                <Text style={styles.grayText}>Отправить код еще раз</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
        )}

        {currentScreen === 'reset' && (
          <View style={styles.screenContainer}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('verify')}>
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>

              <Text style={styles.title}>Сбросить пароль</Text>
              <Text style={styles.subtitle}>Не менее 8 символов, с прописными и строчными буквами</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry
                />
                <Text style={styles.eyeIcon}>👁️</Text>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Повторить пароль"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry
                />
                <Text style={styles.eyeIcon}>👁️</Text>
              </View>

              <TouchableOpacity 
                style={[styles.mainButton, { marginTop: 20 }]} 
                onPress={() => setCurrentScreen('login')}
              >
                <Text style={styles.mainButtonText}>Сохранить</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
        )}

        {currentScreen === 'profile' && (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.profileScroll}>
            <View style={styles.profileHeader}>
              <View style={styles.avatarWrapper}>
                <Image source={{ uri: userData.avatar }} style={styles.avatar} />
                <View style={styles.statusBadge} />
              </View>
              <Text style={styles.profileName}>{userData.name}</Text>
              <Text style={styles.profileRole}>{userData.role}</Text>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Личные данные</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoIcon}>📞</Text>
                <View>
                  <Text style={styles.infoLabel}>Телефон</Text>
                  <Text style={styles.infoValue}>{userData.phone}</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoRow}>
                <Text style={styles.infoIcon}>✉️</Text>
                <View>
                  <Text style={styles.infoLabel}>Email</Text>
                  <Text style={styles.infoValue}>{userData.email}</Text>
                </View>
              </View>
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Мои документы</Text>
              {userData.documents.map((doc) => (
                <TouchableOpacity key={doc.id} style={styles.docRow}>
                  <View style={styles.docLeft}>
                    <Text style={styles.docIcon}>{doc.icon}</Text>
                    <Text style={styles.docTitle}>{doc.title}</Text>
                  </View>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{doc.status}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>Устройства</Text>
              {userData.devices.map((device) => (
                <View key={device.id} style={styles.deviceRow}>
                  <Text style={styles.deviceIcon}>💻</Text>
                  <View>
                    <Text style={styles.deviceName}>{device.name}</Text>
                    <Text style={styles.deviceStatus}>{device.status}</Text>
                  </View>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Выйти из аккаунта</Text>
            </TouchableOpacity>
          </ScrollView>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 844,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    overflow: 'hidden',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    marginBottom: 24,
  },
  backArrow: {
    fontSize: 24,
    color: '#1f2937',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 32,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  inputIcon: {
    marginRight: 12,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  eyeIcon: {
    fontSize: 16,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 4,
    marginBottom: 16,
  },
  purpleText: {
    color: '#9333ea',
    fontSize: 14,
    fontWeight: '500',
  },
  mainButton: {
    backgroundColor: '#9333ea',
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9333ea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  mainButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  grayText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    position: 'relative',
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 10,
  },
  codeBox: {
    width: 70,
    height: 56,
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  codeBoxFilled: {
    borderColor: '#9333ea',
    backgroundColor: '#fff',
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#9333ea',
    borderColor: '#9333ea',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
  },
  profileScroll: {
    paddingBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  statusBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  profileRole: {
    fontSize: 13,
    color: '#9333ea',
    fontWeight: '600',
    marginTop: 2,
  },
  sectionCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 8,
  },
  docRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  docLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  docTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
  badge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 11,
    color: '#166534',
    fontWeight: '600',
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  deviceIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  deviceName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
  deviceStatus: {
    fontSize: 11,
    color: '#9ca3af',
  },
  logoutButton: {
    backgroundColor: '#fef2f2',
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  logoutButtonText: {
    color: '#dc2626',
    fontSize: 15,
    fontWeight: '600',
  },
});