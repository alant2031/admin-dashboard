import { Box, Typography, useTheme, IconButton, Button } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import GeoChart from '../../components/GeoChart';
import ProgressCircle from '../../components/ProgressCircle';
import StatBox from '../../components/StatBox';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header
					title="DASHBOARD"
					subtitle="Bem-vindo ao seu painel administrativo"
				/>
				<Box>
					<Button
						sx={{
							backgroundColor: colors.grey[300],
							color: colors.primary[200],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: '10px' }} />
						Baixar relatórios
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS  */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* ROW 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="12,366"
						subtitle="Emails enviados"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.turquoise[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="36,540"
						subtitle="Vendas Obtidas"
						progress="0.5"
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.turquoise[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="95,883"
						subtitle="Novos Clientes"
						progress="0.30"
						increase="+5%"
						icon={
							<PersonAddIcon
								sx={{ color: colors.turquoise[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="1,052,004"
						subtitle="Tráfego de entrada"
						progress="0.80"
						increase="+45%"
						icon={
							<TrafficIcon
								sx={{ color: colors.turquoise[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>

				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[800]}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Receita Gerada
							</Typography>
							<Typography
								variant="h3"
								fontWeight="bold"
								color={colors.turquoise[500]}
							>
								R$86,355,002
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: '26px', color: colors.turquoise[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height="250px" mt="-20px">
						<LineChart isDashboard />
					</Box>
				</Box>
				{/* TRANSACTIONS */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[800]}
					overflow="auto"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={`4px solid ${colors.primary[500]}`}
						color={colors.grey[100]}
						p="15px"
					>
						<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
							Últimas Operações
						</Typography>
					</Box>
					{mockTransactions.map((transaction, id) => (
						<Box
							key={`${transaction.txId}-${id}`}
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							p="15px"
						>
							<Box>
								<Typography
									color={colors.turquoise[500]}
									variant="h5"
									fontWeight="600"
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box
								backgroundColor={colors.turquoise[500]}
								p="5px 10px"
								borderRadius="4px"
							>
								R${transaction.cost}
							</Box>
						</Box>
					))}
				</Box>
				{/* ROW 3 */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[800]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600">
						Campanha
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="25px"
					>
						<ProgressCircle size="125" />
						<Typography
							variant="h5"
							color={colors.turquoise[500]}
							sx={{ mt: '15px' }}
						>
							R$44,223 Receita Gerada
						</Typography>
						<Typography>Inclui despesas e custos extras diversos</Typography>
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[800]}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ p: '30px 30px 0 30px' }}
					>
						Quantidade de vendas
					</Typography>
					<Box height="250px" mt="-20px">
						<BarChart isDashboard />
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[800]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600" sx={{ mb: '15px' }}>
						Tráfego Baseado em Geografia
					</Typography>
					<Box height="200px">
						<GeoChart isDashboard />
					</Box>
				</Box>
				{/* */}
			</Box>
		</Box>
	);
};

export default Dashboard;
